
import { Cmp6711Component } from './cmp';
describe('Cmp6711Component', () => {
  it('should add', () => {
    expect(new Cmp6711Component().add6711(1)).toBe(6712);
  });
});