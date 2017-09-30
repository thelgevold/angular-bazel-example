
import { Cmp9784Component } from './cmp';
describe('Cmp9784Component', () => {
  it('should add', () => {
    expect(new Cmp9784Component().add9784(1)).toBe(9785);
  });
});