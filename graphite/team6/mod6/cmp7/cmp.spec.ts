
import { Cmp6667Component } from './cmp';
describe('Cmp6667Component', () => {
  it('should add', () => {
    expect(new Cmp6667Component().add6667(1)).toBe(6668);
  });
});