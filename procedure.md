### Verilog Design of Negative and Positive edged D-Flip-Flop

#### Steps to Complete the Code

1. **Arrange the Code Blocks:**

   - Place the code block that defines the Verilog module name, inputs, and outputs first.
   - Next, add the code block that defines the module functionality (the always block).
   - Finally, add the code block that ends the module.

2. **Drag and Drop:**

   - Drag and drop the code blocks to arrange them in the order mentioned above for both the Verilog module and the testbench.

3. **Complete the Code Blocks:**

   - For the Verilog module:

     - Enter a name for the module. The name should begin with an alphabet and can include alphanumeric characters and underscores (`_`). No spaces or special characters allowed.
     - Select the inputs as `D` and `CLK`, and the output as `Q`.
     - In the always block, assign `Q` the value of `D` at the clock edge:
       - For a positive edge D Flip-Flop, select `posedge CLK`.
       - For a negative edge D Flip-Flop, select `negedge CLK`.
     - Use the non-blocking assignment operator (`<=`) for sequential logic.

   - For the Verilog testbench:
     - Enter a name for the testbench. The name should begin with an alphabet, include only alphanumeric characters and underscores, and must not match the module name.
     - Declare `D` and `CLK` as registers, and `Q` as a wire.
     - Instantiate the D Flip-Flop module by entering its name and selecting the arguments in the same order as in the module definition.
     - Define the input `D` waveform using the dropdown options provided.
     - Define the clock (`CLK`) waveform in the appropriate block.

**Note:**

- While naming modules, testbenches, variables, and instance names, ensure they begin with an alphabet or underscore and only contain alphanumeric characters and underscores.
- Do not use the same name for any two variables in the same module or testbench.

#### Observations

- After clicking the **Validate** button (assuming all code blocks are filled correctly), you should see a "Success" message and a truth table for the input `D` wave you have selected, under the Observations section.
- Observe the fluctuations in the input wave and the corresponding expected and observed output `Q` wave.
