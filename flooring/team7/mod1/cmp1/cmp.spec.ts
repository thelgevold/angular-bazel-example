
import { Cmp5711Component } from './cmp';
describe('Cmp5711Component', () => {
  it('should add', () => {
    expect(new Cmp5711Component().add5711(1)).toBe(5712);
  });
});