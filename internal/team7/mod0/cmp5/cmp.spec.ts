
import { Cmp8705Component } from './cmp';
describe('Cmp8705Component', () => {
  it('should add', () => {
    expect(new Cmp8705Component().add8705(1)).toBe(8706);
  });
});