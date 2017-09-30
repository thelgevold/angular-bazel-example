
import { Cmp6038Component } from './cmp';
describe('Cmp6038Component', () => {
  it('should add', () => {
    expect(new Cmp6038Component().add6038(1)).toBe(6039);
  });
});