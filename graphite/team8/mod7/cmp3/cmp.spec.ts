
import { Cmp6873Component } from './cmp';
describe('Cmp6873Component', () => {
  it('should add', () => {
    expect(new Cmp6873Component().add6873(1)).toBe(6874);
  });
});