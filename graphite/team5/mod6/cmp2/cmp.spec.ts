
import { Cmp6562Component } from './cmp';
describe('Cmp6562Component', () => {
  it('should add', () => {
    expect(new Cmp6562Component().add6562(1)).toBe(6563);
  });
});