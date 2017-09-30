
import { Cmp6770Component } from './cmp';
describe('Cmp6770Component', () => {
  it('should add', () => {
    expect(new Cmp6770Component().add6770(1)).toBe(6771);
  });
});