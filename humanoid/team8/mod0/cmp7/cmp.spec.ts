
import { Cmp7807Component } from './cmp';
describe('Cmp7807Component', () => {
  it('should add', () => {
    expect(new Cmp7807Component().add7807(1)).toBe(7808);
  });
});