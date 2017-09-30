
import { Cmp7762Component } from './cmp';
describe('Cmp7762Component', () => {
  it('should add', () => {
    expect(new Cmp7762Component().add7762(1)).toBe(7763);
  });
});