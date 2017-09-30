
import { Cmp9096Component } from './cmp';
describe('Cmp9096Component', () => {
  it('should add', () => {
    expect(new Cmp9096Component().add9096(1)).toBe(9097);
  });
});