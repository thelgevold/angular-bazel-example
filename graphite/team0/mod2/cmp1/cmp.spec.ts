
import { Cmp6021Component } from './cmp';
describe('Cmp6021Component', () => {
  it('should add', () => {
    expect(new Cmp6021Component().add6021(1)).toBe(6022);
  });
});