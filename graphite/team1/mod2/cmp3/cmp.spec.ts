
import { Cmp6123Component } from './cmp';
describe('Cmp6123Component', () => {
  it('should add', () => {
    expect(new Cmp6123Component().add6123(1)).toBe(6124);
  });
});