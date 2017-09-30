
import { Cmp6031Component } from './cmp';
describe('Cmp6031Component', () => {
  it('should add', () => {
    expect(new Cmp6031Component().add6031(1)).toBe(6032);
  });
});