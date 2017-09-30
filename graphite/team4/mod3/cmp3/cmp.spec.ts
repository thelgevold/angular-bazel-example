
import { Cmp6433Component } from './cmp';
describe('Cmp6433Component', () => {
  it('should add', () => {
    expect(new Cmp6433Component().add6433(1)).toBe(6434);
  });
});