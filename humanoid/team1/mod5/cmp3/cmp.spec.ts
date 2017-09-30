
import { Cmp7153Component } from './cmp';
describe('Cmp7153Component', () => {
  it('should add', () => {
    expect(new Cmp7153Component().add7153(1)).toBe(7154);
  });
});