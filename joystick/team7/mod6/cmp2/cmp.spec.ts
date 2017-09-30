
import { Cmp9762Component } from './cmp';
describe('Cmp9762Component', () => {
  it('should add', () => {
    expect(new Cmp9762Component().add9762(1)).toBe(9763);
  });
});