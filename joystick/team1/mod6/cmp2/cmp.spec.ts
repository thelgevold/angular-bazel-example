
import { Cmp9162Component } from './cmp';
describe('Cmp9162Component', () => {
  it('should add', () => {
    expect(new Cmp9162Component().add9162(1)).toBe(9163);
  });
});