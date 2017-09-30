
import { Cmp7527Component } from './cmp';
describe('Cmp7527Component', () => {
  it('should add', () => {
    expect(new Cmp7527Component().add7527(1)).toBe(7528);
  });
});