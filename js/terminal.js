/**
 * INTERACTIVE DEVELOPER TERMINAL
 * Full CLI emulator with custom commands, themes, history, and auto-scroll
 */

(function () {
  const terminalBody = document.getElementById('terminal-body');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const clearBtn = document.getElementById('terminal-clear-btn');
  const chipContainer = document.getElementById('terminal-chips');

  if (!terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  // Process command execution
  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to history
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Render user command line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt-prefix">projjal@portfolio:~$</span> <span>${escapeHtml(cmd)}</span>`;
    terminalOutput.appendChild(userLine);

    // Process output
    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const arg = parts[1];

    const resLine = document.createElement('div');
    resLine.className = 'terminal-line';
    resLine.style.marginBottom = '0.75rem';

    if (mainCmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    } else if (mainCmd === 'theme') {
      if (arg && ['default', 'cyber', 'midnight', 'light'].includes(arg)) {
        window.setPortfolioTheme(arg);
        resLine.innerHTML = `<span style="color:#10b981;">✓</span> Theme switched to <b>${arg}</b>.`;
      } else {
        resLine.innerHTML = `<span style="color:#ef4444;">✗</span> Usage: theme [default | cyber | midnight | light]`;
      }
    } else if (mainCmd === 'sudo') {
      resLine.innerHTML = `<span style="color:#ec4899;">[ACCESS GRANTED]</span> Root access unlocked. You now possess unlimited tea & coffee privileges. ☕`;
    } else if (mainCmd === 'repo' || mainCmd === 'github') {
      resLine.innerHTML = `Opening GitHub portfolio repository... <a href="${PORTFOLIO_DATA.personal.github}" target="_blank" style="color:var(--accent-secondary);text-decoration:underline;">Click to visit</a>`;
    } else if (mainCmd === 'date') {
      resLine.innerHTML = `Current System Time: <b>${new Date().toUTCString()}</b>`;
    } else if (PORTFOLIO_DATA.terminalResponses && PORTFOLIO_DATA.terminalResponses[mainCmd]) {
      resLine.innerHTML = PORTFOLIO_DATA.terminalResponses[mainCmd];
    } else {
      resLine.innerHTML = `<span style="color:#ef4444;">Command not found: "${escapeHtml(mainCmd)}"</span>. Type <span class="cmd-highlight">'help'</span> for a list of available commands.`;
    }

    terminalOutput.appendChild(resLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Keyboard navigation & execution
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  // Focus input when clicking anywhere inside terminal body
  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = '';
      terminalInput.focus();
    });
  }

  // Clickable Chips
  if (chipContainer) {
    chipContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.cmd-chip');
      if (chip) {
        const cmd = chip.getAttribute('data-cmd');
        if (cmd) {
          executeCommand(cmd);
          terminalInput.focus();
        }
      }
    });
  }
})();
