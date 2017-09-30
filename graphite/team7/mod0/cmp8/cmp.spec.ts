
import { Cmp6708Component } from './cmp';
describe('Cmp6708Component', () => {
  it('should add', () => {
    expect(new Cmp6708Component().add6708(1)).toBe(6709);
  });
});