
import { Cmp3824Component } from './cmp';
describe('Cmp3824Component', () => {
  it('should add', () => {
    expect(new Cmp3824Component().add3824(1)).toBe(3825);
  });
});