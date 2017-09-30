
import { Cmp5609Component } from './cmp';
describe('Cmp5609Component', () => {
  it('should add', () => {
    expect(new Cmp5609Component().add5609(1)).toBe(5610);
  });
});