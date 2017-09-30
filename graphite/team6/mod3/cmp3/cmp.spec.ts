
import { Cmp6633Component } from './cmp';
describe('Cmp6633Component', () => {
  it('should add', () => {
    expect(new Cmp6633Component().add6633(1)).toBe(6634);
  });
});