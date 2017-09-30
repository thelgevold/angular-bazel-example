
import { Cmp7078Component } from './cmp';
describe('Cmp7078Component', () => {
  it('should add', () => {
    expect(new Cmp7078Component().add7078(1)).toBe(7079);
  });
});