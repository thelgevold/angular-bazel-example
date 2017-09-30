
import { Cmp5979Component } from './cmp';
describe('Cmp5979Component', () => {
  it('should add', () => {
    expect(new Cmp5979Component().add5979(1)).toBe(5980);
  });
});