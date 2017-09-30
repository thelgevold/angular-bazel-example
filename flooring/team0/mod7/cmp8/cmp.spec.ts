
import { Cmp5078Component } from './cmp';
describe('Cmp5078Component', () => {
  it('should add', () => {
    expect(new Cmp5078Component().add5078(1)).toBe(5079);
  });
});