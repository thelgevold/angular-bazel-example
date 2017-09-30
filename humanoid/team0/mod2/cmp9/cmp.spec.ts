
import { Cmp7029Component } from './cmp';
describe('Cmp7029Component', () => {
  it('should add', () => {
    expect(new Cmp7029Component().add7029(1)).toBe(7030);
  });
});