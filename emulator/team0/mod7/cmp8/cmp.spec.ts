
import { Cmp4078Component } from './cmp';
describe('Cmp4078Component', () => {
  it('should add', () => {
    expect(new Cmp4078Component().add4078(1)).toBe(4079);
  });
});