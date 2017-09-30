
import { Cmp8153Component } from './cmp';
describe('Cmp8153Component', () => {
  it('should add', () => {
    expect(new Cmp8153Component().add8153(1)).toBe(8154);
  });
});