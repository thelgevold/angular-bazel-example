
import { Cmp7705Component } from './cmp';
describe('Cmp7705Component', () => {
  it('should add', () => {
    expect(new Cmp7705Component().add7705(1)).toBe(7706);
  });
});