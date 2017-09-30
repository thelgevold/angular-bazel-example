
import { Cmp6190Component } from './cmp';
describe('Cmp6190Component', () => {
  it('should add', () => {
    expect(new Cmp6190Component().add6190(1)).toBe(6191);
  });
});