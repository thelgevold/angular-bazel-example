
import { Cmp6346Component } from './cmp';
describe('Cmp6346Component', () => {
  it('should add', () => {
    expect(new Cmp6346Component().add6346(1)).toBe(6347);
  });
});