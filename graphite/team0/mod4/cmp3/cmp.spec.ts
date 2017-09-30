
import { Cmp6043Component } from './cmp';
describe('Cmp6043Component', () => {
  it('should add', () => {
    expect(new Cmp6043Component().add6043(1)).toBe(6044);
  });
});