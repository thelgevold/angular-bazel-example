
import { Cmp9979Component } from './cmp';
describe('Cmp9979Component', () => {
  it('should add', () => {
    expect(new Cmp9979Component().add9979(1)).toBe(9980);
  });
});