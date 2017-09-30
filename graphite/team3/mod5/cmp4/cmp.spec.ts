
import { Cmp6354Component } from './cmp';
describe('Cmp6354Component', () => {
  it('should add', () => {
    expect(new Cmp6354Component().add6354(1)).toBe(6355);
  });
});