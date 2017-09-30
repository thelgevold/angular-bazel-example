
import { Cmp5262Component } from './cmp';
describe('Cmp5262Component', () => {
  it('should add', () => {
    expect(new Cmp5262Component().add5262(1)).toBe(5263);
  });
});