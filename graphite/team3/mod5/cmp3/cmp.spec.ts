
import { Cmp6353Component } from './cmp';
describe('Cmp6353Component', () => {
  it('should add', () => {
    expect(new Cmp6353Component().add6353(1)).toBe(6354);
  });
});