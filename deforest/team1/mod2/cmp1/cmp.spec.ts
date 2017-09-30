
import { Cmp3121Component } from './cmp';
describe('Cmp3121Component', () => {
  it('should add', () => {
    expect(new Cmp3121Component().add3121(1)).toBe(3122);
  });
});