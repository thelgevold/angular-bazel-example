
import { Cmp6342Component } from './cmp';
describe('Cmp6342Component', () => {
  it('should add', () => {
    expect(new Cmp6342Component().add6342(1)).toBe(6343);
  });
});