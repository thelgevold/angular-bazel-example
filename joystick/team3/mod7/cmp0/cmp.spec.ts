
import { Cmp9370Component } from './cmp';
describe('Cmp9370Component', () => {
  it('should add', () => {
    expect(new Cmp9370Component().add9370(1)).toBe(9371);
  });
});