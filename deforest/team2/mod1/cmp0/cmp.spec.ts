
import { Cmp3210Component } from './cmp';
describe('Cmp3210Component', () => {
  it('should add', () => {
    expect(new Cmp3210Component().add3210(1)).toBe(3211);
  });
});