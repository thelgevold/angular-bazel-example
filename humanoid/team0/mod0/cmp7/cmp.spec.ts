
import { Cmp7007Component } from './cmp';
describe('Cmp7007Component', () => {
  it('should add', () => {
    expect(new Cmp7007Component().add7007(1)).toBe(7008);
  });
});