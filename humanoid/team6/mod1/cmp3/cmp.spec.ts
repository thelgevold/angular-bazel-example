
import { Cmp7613Component } from './cmp';
describe('Cmp7613Component', () => {
  it('should add', () => {
    expect(new Cmp7613Component().add7613(1)).toBe(7614);
  });
});