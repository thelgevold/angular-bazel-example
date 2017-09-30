
import { Cmp7055Component } from './cmp';
describe('Cmp7055Component', () => {
  it('should add', () => {
    expect(new Cmp7055Component().add7055(1)).toBe(7056);
  });
});