
import { Cmp7824Component } from './cmp';
describe('Cmp7824Component', () => {
  it('should add', () => {
    expect(new Cmp7824Component().add7824(1)).toBe(7825);
  });
});