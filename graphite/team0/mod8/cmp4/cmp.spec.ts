
import { Cmp6084Component } from './cmp';
describe('Cmp6084Component', () => {
  it('should add', () => {
    expect(new Cmp6084Component().add6084(1)).toBe(6085);
  });
});