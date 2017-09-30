
import { Cmp9262Component } from './cmp';
describe('Cmp9262Component', () => {
  it('should add', () => {
    expect(new Cmp9262Component().add9262(1)).toBe(9263);
  });
});