
import { Cmp6218Component } from './cmp';
describe('Cmp6218Component', () => {
  it('should add', () => {
    expect(new Cmp6218Component().add6218(1)).toBe(6219);
  });
});