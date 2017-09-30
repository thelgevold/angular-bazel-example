
import { Cmp6602Component } from './cmp';
describe('Cmp6602Component', () => {
  it('should add', () => {
    expect(new Cmp6602Component().add6602(1)).toBe(6603);
  });
});