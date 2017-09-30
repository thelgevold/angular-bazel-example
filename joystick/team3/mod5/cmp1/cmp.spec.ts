
import { Cmp9351Component } from './cmp';
describe('Cmp9351Component', () => {
  it('should add', () => {
    expect(new Cmp9351Component().add9351(1)).toBe(9352);
  });
});